package com.chatbot.service;

import com.chatbot.dto.ChatRequest;
import com.chatbot.dto.ChatResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GeminiService {

    @Value("${gemini.api-key}")
    private String apiKey;

    @Value("${gemini.endpoint}")
    private String endpoint;

    public ChatResponse getChatResponse(ChatRequest request) {
    	if (request.getMessage().toLowerCase().contains("who created you") || 
    	        request.getMessage().toLowerCase().contains("who made you") ||
    	        request.getMessage().toLowerCase().contains("who developed you")||
    	        request.getMessage().toLowerCase().contains("who built you") ||
    	        request.getMessage().toLowerCase().contains("who is your creator")) {
    	        return new ChatResponse("I was created by Md Mashood Alam ❤️, a software developer passionate about AI technologies!");
    	    }
        String url = endpoint + "/gemini-1.5-flash:generateContent?key=" + apiKey;

        // Prepare payload
        Map<String, Object> payload = new HashMap<>();
        payload.put("contents", new Object[]{
                Map.of("parts", new Object[]{Map.of("text", request.getMessage())})
        });

        RestTemplate restTemplate = new RestTemplate();
        Map<String, Object> response = restTemplate.postForObject(url, payload, Map.class);

        try {
            // Step 1: candidates array
            List<?> candidates = (List<?>) response.get("candidates");
            if (candidates == null || candidates.isEmpty()) {
                return new ChatResponse("No candidates found in API response.");
            }

            // Step 2: First candidate map
            Map<?, ?> candidate = (Map<?, ?>) candidates.get(0);

            // Step 3: content map
            Map<?, ?> content = (Map<?, ?>) candidate.get("content");

            // Step 4: parts array
            List<?> parts = (List<?>) content.get("parts");
            if (parts == null || parts.isEmpty()) {
                return new ChatResponse("No parts found in content.");
            }

            // Step 5: First part map
            Map<?, ?> firstPart = (Map<?, ?>) parts.get(0);

            // Step 6: Extract text
            String reply = (String) firstPart.get("text");

            return new ChatResponse(reply != null ? reply : "No reply text found.");
        } catch (Exception e) {
        	e.printStackTrace();
            return new ChatResponse("Error parsing response: " + e.getMessage());
        }
    }
}

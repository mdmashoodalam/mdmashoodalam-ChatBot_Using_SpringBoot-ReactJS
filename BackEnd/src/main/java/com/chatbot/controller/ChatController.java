package com.chatbot.controller;

import com.chatbot.dto.ChatRequest;
import com.chatbot.dto.ChatResponse;
import com.chatbot.service.GeminiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private GeminiService geminiService;

    @PostMapping
    public ChatResponse chat(@RequestBody ChatRequest request) {
        return geminiService.getChatResponse(request);
    }
}

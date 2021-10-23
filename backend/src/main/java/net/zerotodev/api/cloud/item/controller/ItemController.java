package net.zerotodev.api.cloud.item.controller;

import lombok.RequiredArgsConstructor;
import net.zerotodev.api.cloud.item.service.ItemService;
import org.springframework.web.bind.annotation.RestController;
@RequiredArgsConstructor
@RestController
public class ItemController {
    private final ItemService itemService;
}

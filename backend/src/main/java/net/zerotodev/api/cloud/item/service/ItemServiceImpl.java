package net.zerotodev.api.cloud.item.service;

import lombok.RequiredArgsConstructor;
import net.zerotodev.api.cloud.item.repository.ItemRepository;
import org.springframework.stereotype.Service;
@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;
}

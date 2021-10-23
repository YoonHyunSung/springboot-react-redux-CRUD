package net.zerotodev.api.cloud.board.controller;

import lombok.RequiredArgsConstructor;
import net.zerotodev.api.cloud.board.service.BoardService;
import org.springframework.web.bind.annotation.RestController;
@RequiredArgsConstructor
@RestController
public class BoardController {
    private final BoardService boardService;
}

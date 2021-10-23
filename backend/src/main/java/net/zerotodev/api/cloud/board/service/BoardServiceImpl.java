package net.zerotodev.api.cloud.board.service;

import lombok.RequiredArgsConstructor;
import net.zerotodev.api.cloud.board.controller.BoardController;
import net.zerotodev.api.cloud.board.repository.BoardRepository;
import org.springframework.stereotype.Service;
@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService{
    private final BoardRepository boardRepository;



}

package net.zerotodev.api.cloud.user.domain;

import lombok.*;
import net.zerotodev.api.cloud.board.domain.Article;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Getter @Setter @ToString
public class UserSerializer implements Serializable{
    private static final long serialVersionUID = 1L;

    private long userId;
    private String username;
    private String password;
    private String name;
    private String email;
    private String regDate;
    private List<Article> articleList;

    @Builder
    UserSerializer(long userId, String username, String password, String name,
                   String email, String regDate ){
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.regDate = regDate;
    }
    @Builder
    UserSerializer(long userId, String username, String password, String name,
                   String email, String regDate, List<Article> articleList ){
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.regDate = regDate;
        this.articleList = articleList;
    }

}

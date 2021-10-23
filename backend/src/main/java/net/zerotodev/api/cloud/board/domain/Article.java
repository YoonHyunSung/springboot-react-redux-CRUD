package net.zerotodev.api.cloud.board.domain;

import com.sun.istack.NotNull;
import lombok.Data;
import net.zerotodev.api.cloud.user.domain.User;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity
@Data @Component @Table(name = "articles")
public class Article {
    @Id
    @Column(name = "article_id")
    @GeneratedValue
    private long articleId;

    @Column @NotNull private String title;
    @Column @NotNull private String content;
    @Column(name = "written_date") @NotNull private String writtenDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id", insertable = false, updatable = false)
    private User item;






}

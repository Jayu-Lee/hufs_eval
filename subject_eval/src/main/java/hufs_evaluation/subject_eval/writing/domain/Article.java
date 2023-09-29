package hufs_evaluation.subject_eval.writing.domain;

import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class Article {

    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String articleTitle;

    @Column
    private String prfsrName;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime localDateTime;

    private String password;

    @Builder
    public Article(String articleTitle, String prfsrName, String content, String password) {
        this.articleTitle = articleTitle;
        this.prfsrName = prfsrName;
        this.content = content;
        this.password = password;

    }

    public Article() {
    }
}

package hufs_evaluation.subject_eval.writing;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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

    @Builder
    public Article(Long id, String articleTitle, String prfsrName, String content) {
        this.id = id;
        this.articleTitle = articleTitle;
        this.prfsrName = prfsrName;
        this.content = content;
    }
}

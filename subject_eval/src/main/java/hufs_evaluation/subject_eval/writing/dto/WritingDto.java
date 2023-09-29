package hufs_evaluation.subject_eval.writing.dto;

import hufs_evaluation.subject_eval.writing.domain.Article;
import lombok.*;

import java.time.LocalDateTime;

@Getter @Setter
@ToString
@NoArgsConstructor
public class WritingDto {
    private Long id;
    private String articleTitle;
    private String prfsrName;
    private String content;
    private LocalDateTime localDateTime;

    public Article toEntity() {
        Article build = Article.builder()
                .articleTitle(articleTitle)
                .prfsrName(prfsrName)
                .content(content)
                .build();

        return build;
    }

    @Builder
    public void ArticleDto(Long id, String articleTitle, String prfsrName, String content, LocalDateTime localDateTime) {
        this.id = id;
        this.articleTitle = articleTitle;
        this.prfsrName = prfsrName;
        this.content = content;
        this.localDateTime = localDateTime;
    }
}

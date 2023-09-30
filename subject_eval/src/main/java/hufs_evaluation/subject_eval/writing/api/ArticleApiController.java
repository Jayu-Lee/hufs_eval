package hufs_evaluation.subject_eval.writing.api;
import hufs_evaluation.subject_eval.writing.domain.Article;
import hufs_evaluation.subject_eval.writing.service.WritingService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ArticleApiController {

    private final WritingService writingService;

    //전체 Article 조회
    @GetMapping("/api/view")
    public Result articles() {
        List<Article> articles = writingService.findArticles();
        List<ArticleDto> collect = articles.stream()
                .map(a -> new ArticleDto(a.getArticleTitle(), a.getPrfsrName(), a.getContent()))
                .collect(Collectors.toList());

        return new Result(collect);
    }

    //API 통신 테스트
    @GetMapping("/api/viewTest")
    public String articlesTest() {
        return "Hello!";
    }

    // Article 개별 조회
    @GetMapping("/api/view/{id}")
    public ArticleDto article(@PathVariable("id") Long id) {

        Article article = writingService.findOne(id);
        return new ArticleDto(article.getArticleTitle(), article.getPrfsrName(), article.getContent());
    }

    // Article 생성
    @PostMapping("/api/post")
    public CreateArticleResponse saveArticle(@RequestBody @Valid CreateArticleRequest request) {
        Article article = new Article(request.getArticleTitle(), request.getPrfsrName(), request.getContent(), request.getPassword());
        Long id = writingService.join(article);
        return new CreateArticleResponse(id);
    }

    // Article 수정, 삭제시 Password 확인
    @GetMapping("/api/view/{id}/pw")
    public boolean isPasswordEquals(@PathVariable("id") Long id, @RequestBody PasswordRequest request) {
        return writingService.isPasswordCorrect(id, request.getPassword());
    }

    // Article 수정
    @PutMapping("/api/view/{id}")
    public UpdateArticleResponse updateArticle(@PathVariable("id") Long id, @RequestBody UpdateArticleRequest request) {
        writingService.update(id, request.getContent());
        Article findArticle = writingService.findOne(id);
        return new UpdateArticleResponse(findArticle.getId(), findArticle.getContent());
    }

    // Article 삭제
    @DeleteMapping("/api/view/{id}")
    public void deleteArticle(@PathVariable("id") Long id) {
        writingService.delete(id);
    }


    @Data
    static class CreateArticleRequest {
        private String articleTitle;
        private String prfsrName;
        private String content;
        private String password;
    }

    @Data
    static class CreateArticleResponse {
        private Long id;

        public CreateArticleResponse(Long id) {
            this.id = id;
        }
    }

    @Data
    static class UpdateArticleRequest {
        private String content;
    }

    @Data
    @AllArgsConstructor
    static class UpdateArticleResponse {
        private Long id;
        private String content;
    }

    @Data
    @AllArgsConstructor
    static class ArticleDto {
        private String articleTitle;
        private String prfsrName;
        private String content;
    }

    @Data
    @AllArgsConstructor
    static class Result<T> {
        private T data;
    }

    @Data
    static class PasswordRequest {
        private String password;
    }

}

package hufs_evaluation.subject_eval.writing.service;
import hufs_evaluation.subject_eval.writing.domain.Article;
import hufs_evaluation.subject_eval.writing.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class WritingService {

    private final ArticleRepository articleRepository;
    private final PasswordEncoder passwordEncoder;

    public Long join(Article article) {
        String encodedPassword = passwordEncoder.encode(article.getPassword());
        article.setPassword(encodedPassword);
        articleRepository.save(article);
        return article.getId();
    }

    //회원 전체 조회
    public List<Article> findArticles() {
        return articleRepository.findAll();
    }

    public Article findOne(Long memberId) {
        return articleRepository.findOne(memberId);
    }

    public void update(Long id, String content) {
        Article article = articleRepository.findOne(id);
        article.setContent(content);
    }

    public void delete(Long id) {
        articleRepository.deleteArticle(id);
    }

    public boolean isPasswordCorrect(Long id, String plainPassword) {
        Article findArticle = articleRepository.findOne(id);

        return passwordEncoder.matches(plainPassword, findArticle.getPassword());
    }
}

package hufs_evaluation.subject_eval;

import hufs_evaluation.subject_eval.writing.domain.Article;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;

@Component
@RequiredArgsConstructor
public class InitDb {

    private final InitService initService;

    @PostConstruct
    public void init() {
        initService.dbInit();
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService {

        private final EntityManager em;

        public void dbInit() {
            Article article = createArticle(1L, "사람은 무엇으로 사는가", "윤일동", "매우나쁨", "1234");
            Article article2 = createArticle(2L, "세상에서 제일 재미없는 자료구조", "신찬수", "매우나쁨", "1234");

            em.persist(article);
            em.persist(article2);
        }

        private Article createArticle(long id, String articleTitle, String prfsrName, String content, String password) {
            Article article = new Article();
            article.setArticleTitle(articleTitle);
            article.setPrfsrName(prfsrName);
            article.setContent(content);
            article.setPassword(password);
            return article;
        }
    }
}

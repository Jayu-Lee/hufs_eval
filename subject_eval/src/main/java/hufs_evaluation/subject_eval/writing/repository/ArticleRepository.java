package hufs_evaluation.subject_eval.writing.repository;
import hufs_evaluation.subject_eval.writing.domain.Article;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class ArticleRepository {

    private final EntityManager em;

    public void save(Article article) { em.persist(article);}

    public Article findOne(Long id) {
        return em.find(Article.class, id);
    }

    public List<Article> findAll() {
        return em.createQuery("select a from Article a", Article.class)
                .getResultList();
    }

    public void deleteArticle(Long id) {
        Article findArticle = findOne(id);
        em.remove(findArticle);
    }

    public List<Article> findByTitle(String articleTitle) {
        return em.createQuery("select a From Article a where a.articleTitle = :articleTitle", Article.class)
                .setParameter("articleTitle", articleTitle)
                .getResultList();
    }
}

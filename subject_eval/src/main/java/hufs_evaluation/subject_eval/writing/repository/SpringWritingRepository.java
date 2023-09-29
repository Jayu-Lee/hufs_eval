package hufs_evaluation.subject_eval.writing.repository;

import hufs_evaluation.subject_eval.writing.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository

public interface SpringWritingRepository extends JpaRepository<Article, Long> {

}


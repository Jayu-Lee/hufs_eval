package hufs_evaluation.subject_eval.writing;

import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository

public interface WritingRepository extends JpaRepository<Article, Long> {

}


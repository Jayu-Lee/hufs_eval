package hufs_evaluation.subject_eval.writing;

import hufs_evaluation.subject_eval.writing.dto.WritingDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class WritingService {
    private WritingRepository writingRepository;

    public WritingService(WritingRepository writingRepository) {
        this.writingRepository = writingRepository;

    }

    @Transactional
    public Long savePost(WritingDto writingDto) {
        return writingRepository.save(writingDto.toEntity()).getId();
    }
}

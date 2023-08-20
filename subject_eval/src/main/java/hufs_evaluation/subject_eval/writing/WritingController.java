package hufs_evaluation.subject_eval.writing;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@Slf4j
@RequiredArgsConstructor
public class WritingController {

    @Autowired
    private WritingService writingService;
    private WritingRepository writingRepository;

    @GetMapping("/")
    public String writePage(){
        return "post";
    }

    @PostMapping("/post")
    public String post(Article article) {
        writingRepository.save(article);
        return "post";
    }
}

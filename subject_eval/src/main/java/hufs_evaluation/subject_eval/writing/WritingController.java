package hufs_evaluation.subject_eval.writing;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@Slf4j
public class WritingController {

    @Autowired
    private WritingService writingService;

    public WritingController(WritingService writingService) {
        this.writingService = writingService;
    }

    @PostMapping("/post")
    public String post() {
        return "post";
    }
}

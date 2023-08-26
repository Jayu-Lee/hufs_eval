package hufs_evaluation.subject_eval.writing;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.annotation.PostConstruct;
import java.util.List;

@Controller
@Slf4j
@RequiredArgsConstructor
public class WritingController {

    private final WritingService writingService;
    private final WritingRepository writingRepository;

    @GetMapping("/")
    public String writePage(){
        return "basic/post";
    }

    @PostMapping("/post")
    public String post(Article article) {
        writingRepository.save(article);
        return "redirect:";
    }

    @GetMapping("/view")
    public String view(Model model) {
        List<Article> articles = writingRepository.findAll();
        model.addAttribute("articles", articles);
        return "basic/view";
    }

    @GetMapping("/view/{id}")
    public String article(@PathVariable long id, Model model) {
        Article article = writingRepository.findById(id);
        model.addAttribute("article", article);
        return "basic/article";
    }

    @PostConstruct
    public void init() {
        writingRepository.save(new Article(1L, "세상은 무엇으로 사는가", "윤일동", "매우나쁨"));
    }
}

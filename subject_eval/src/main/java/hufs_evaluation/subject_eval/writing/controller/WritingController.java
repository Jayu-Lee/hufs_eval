package hufs_evaluation.subject_eval.writing.controller;

import hufs_evaluation.subject_eval.writing.service.WritingService;
import hufs_evaluation.subject_eval.writing.domain.Article;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
@Slf4j
@RequiredArgsConstructor
public class WritingController {

    private final WritingService writingService;

    @GetMapping("/")
    public String view(Model model) {
        List<Article> articles = writingService.findArticles();
        model.addAttribute("articles", articles);
        return "basic/view";
    }

    @GetMapping("/write")
    public String writePage(){
        return "basic/post";
    }

    @PostMapping("/write")
    public String post(Article article) {
        writingService.join(article);
        return "redirect:/";
    }

    @GetMapping("/view/{id}")
    public String article(@PathVariable Long id, Model model) {
        Article findArticle = writingService.findOne(id);
        model.addAttribute("article", findArticle);
        return "basic/article";
    }
}

package net.zerotodev.api.cloud.common;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class HomeController {

    @RequestMapping
    public String home(){
        return new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date());
    }
}

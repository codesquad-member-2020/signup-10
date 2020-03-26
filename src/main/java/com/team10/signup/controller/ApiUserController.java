package com.team10.signup.controller;

import com.team10.signup.domain.User;
import com.team10.signup.api.Result;
import com.team10.signup.service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
public class ApiUserController {
    private Logger logger = LoggerFactory.getLogger(ApiUserController.class);

    private final UserService userService;

    @PostMapping("")
    public User create(User user) {
        logger.info("User : '{}'" , user);
        return userService.save(user);
    }

    @GetMapping("/check/username/{username}")
    public Result checkUsername(@PathVariable String username) {
        logger.info("Username: {}", username);
        if (userService.findByUsername(username).equals(username)) {
            return Result.fail();
        }
        return Result.ok();
    }

    @GetMapping("/check/email/{email}")
    public Result checkEmail(@PathVariable String email) {
        logger.info("email: {}", email);
        if (userService.findByEmail(email).equals(email)) {
            return Result.fail();
        }
        return Result.ok();
    }

    @GetMapping("/check/phone/{phoneNumber}")
    public Result checkPhoneNumber(@PathVariable String phoneNumber) {
        logger.info("email: {}", phoneNumber);
        if (userService.findByPhoneNumber(phoneNumber).equals(phoneNumber)) {
            return Result.fail();
        }
        return Result.ok();
    }

}

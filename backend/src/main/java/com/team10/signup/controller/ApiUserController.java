package com.team10.signup.controller;

import com.team10.signup.api.Result;
import com.team10.signup.domain.User;
import com.team10.signup.domain.UserRequestBody;
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
    public Result create(@RequestBody UserRequestBody userRequestBody) {
        logger.info("User : '{}'", userRequestBody);
        userService.settingUser(userRequestBody);
        return Result.ok();
    }

    @GetMapping("/username/{username}")
    public Result checkUsername(@PathVariable String username) {
        logger.info("Username: {}", username);
        if (userService.findByUsername(username).isPresent()) {
            return Result.fail();
        }
        return Result.ok();
    }

    @GetMapping("/email/{email}")
    public Result checkEmail(@PathVariable String email) {
        logger.info("email: {}", email);
        if (userService.findByEmail(email).isPresent()) {
            return Result.fail();
        }
        return Result.ok();
    }

    @GetMapping("/phone/{phoneNumber}")
    public Result checkPhoneNumber(@PathVariable String phoneNumber) {
        logger.info("email: {}", phoneNumber);
        if (userService.findByPhoneNumber(phoneNumber).isPresent()) {
            return Result.fail();
        }
        return Result.ok();
    }
}

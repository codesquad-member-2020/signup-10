package com.team10.signup.service;

import static org.assertj.core.api.Assertions.assertThat;

import com.team10.signup.domain.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class UserServiceTest {

    private UserService userService;
    User user;

    @BeforeEach
    public void 유저생성() {
        user = User.builder()
                .username("abcd")
                .email("abc@gmail.com")
                .phoneNumber("0101234")
                .build();
    }
}

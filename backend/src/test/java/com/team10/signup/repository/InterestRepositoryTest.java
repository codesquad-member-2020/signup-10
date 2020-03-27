package com.team10.signup.repository;

import com.team10.signup.domain.Interest;
import com.team10.signup.domain.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class InterestRepositoryTest {

    private Logger logger = LoggerFactory.getLogger(InterestRepositoryTest.class);

    @Autowired
    private InterestRepository interestRepository;

    @Autowired
    private UserRepository userRepository;

    @AfterEach
    public void cleanup() {
        userRepository.deleteAll();
        interestRepository.deleteAll();
    }
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

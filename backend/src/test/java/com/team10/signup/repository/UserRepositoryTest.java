package com.team10.signup.repository;

import static org.assertj.core.api.Assertions.assertThat;

import com.team10.signup.domain.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @AfterEach
    public void cleanup() {
        userRepository.deleteAll();
    }

    @Test
    public void 회원가입유저_가져오기() {
        String username = "abcd";
        String password = "1234";

        userRepository.save(User.builder()
            .username(username)
            .password(password)
            .build());

        List<User> userList = (List<User>) userRepository.findAll();
        User user = userList.get(0);
        assertThat(user.getUsername()).isEqualTo(username);
        assertThat(user.getPassword()).isEqualTo(password);
    }



}

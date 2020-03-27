package com.team10.signup.service;

import com.team10.signup.domain.Interest;
import com.team10.signup.domain.User;
import com.team10.signup.domain.UserRequestBody;
import com.team10.signup.repository.InterestRepository;
import com.team10.signup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final InterestRepository interestRepository;

    @Transactional
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Transactional
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Transactional
    public Optional<User> findByPhoneNumber(String phoneNumber) {
        return userRepository.findByPhoneNumber(phoneNumber);
    }

    @Transactional
    public User settingUser(UserRequestBody userRequestBody) {
        User buildUser = User.builder()
                .username(userRequestBody.getUsername())
                .password(userRequestBody.getPassword())
                .name(userRequestBody.getName())
                .birthday(userRequestBody.getBirthday())
                .gender(userRequestBody.getGender())
                .email(userRequestBody.getEmail())
                .phoneNumber(userRequestBody.getPhoneNumber())
                .build();
        String interests = userRequestBody.getInterests();
        List<Interest> interestList = createInterest(interests);
        User user = save(buildUser);
        saveInterest(interestList);
        return user;
    }

    private User save(User user) {
        return userRepository.save(user);
    }

    private void saveInterest(List<Interest> interests) {
        for (Interest interest: interests) {
            interestRepository.save(interest);
        }
    }

    private List<Interest> createInterest(String interests) {
        List<Interest> interestList = new ArrayList<>();
        String[] interestSplit = interests.split(", ");
        for (String interest: interestSplit) {
            interestList.add(new Interest(interest));
        }

        return interestList;
    }
}

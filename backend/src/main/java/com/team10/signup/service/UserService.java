package com.team10.signup.service;

import com.team10.signup.domain.Interest;
import com.team10.signup.domain.User;
import com.team10.signup.repository.InterestRepository;
import com.team10.signup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
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
    public User combineUser(User user, String interests) {
        User userData = save(user);
        List<Interest> interestList = createInterest(userData.getId(), interests);
        addInterest(interestList);
        return userData;
    }

    private User save(User user) {
        return userRepository.save(user);
    }

    private void addInterest(List<Interest> interests) {
        for (Interest interest: interests) {
            interestRepository.save(interest);
        }
    }

    private List<Interest> createInterest(Long userId, String interests) {
        List<Interest> interestList = new ArrayList<>();
        String[] interestSplit = interests.split(", ");
        for (String interest: interestSplit) {
            interestList.add(new Interest(userId, interest));
        }

        return interestList;
    }
}

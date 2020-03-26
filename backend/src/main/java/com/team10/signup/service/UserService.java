package com.team10.signup.service;

import com.team10.signup.domain.Interest;
import com.team10.signup.domain.User;
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

    public User save(User user) {
        return userRepository.save(user);
    }

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

    private List<Interest> createInterest() {
        List<Interest> interestList = new ArrayList<>();


        return interestList;
    }

}

package com.team10.signup.repository;

import com.team10.signup.domain.User;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    @Query("select * from users where username = :username")
    Optional<User> findByUsername(@Param("username") String username);

    @Query("select * from users where email = :email")
    Optional<User> findByEmail(@Param("email") String email);

    @Query("select * from users where phone_number = :phoneNumber")
    Optional<User> findByPhoneNumber(@Param("phoneNumber") String phoneNumber);
}

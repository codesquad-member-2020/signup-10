package com.team10.signup.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class UserRequestBody {
    private String username;
    private String password;
    private String name;
    private String birthday;
    private String gender;
    private String email;
    private String phoneNumber;
    private String interests;

    public UserRequestBody(String username, String password, String name, String birthday,
                           String gender, String email, String phoneNumber, String interests) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.interests = interests;
    }
}

package com.team10.signup.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

@Getter
@NoArgsConstructor
public class Interest {

    @Id
    private Long id;

    @Column("user_id")
    private Long user;

    private String contents;

    public Interest(Long user, String contents) {
        this.user = user;
        this.contents = contents;
    }

    @Override
    public String toString() {
        return "Interest{" +
                "user=" + user +
                ", contents='" + contents + '\'' +
                '}';
    }
}

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
    private User userId;

    private String contents;

    public Interest(Long id, User userId, String contents) {
        this.id = id;
        this.userId = userId;
        this.contents = contents;
    }

    @Override
    public String toString() {
        return "Interest{" +
                "id=" + id +
                ", user=" + userId +
                ", contents='" + contents + '\'' +
                '}';
    }
}

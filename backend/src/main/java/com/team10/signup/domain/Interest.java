package com.team10.signup.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Getter
@Table("interest")
public class Interest {
    @Id
    private Long id;

    private String contents;

    public Interest(String contents) {
        this.contents = contents;
    }

    @Override
    public String toString() {
        return "Interest{" +
                "contents='" + contents + '\'' +
                '}';
    }
}

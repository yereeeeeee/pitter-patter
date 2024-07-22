package com.pitpat.pitterpatter.entity;

import com.pitpat.pitterpatter.entity.Gender;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@AllArgsConstructor(access = AccessLevel.PACKAGE)
@EntityListeners(AuditingEntityListener.class)
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Child {

    @Id @GeneratedValue
    @Column(name = "child_id")
    private Long id;

    private String profile_image;

    private String nickname;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @CreatedDate
    private LocalDate created_at;

    @LastModifiedDate
    private LocalDate updated_at;

    private LocalDate birth;

    private int personal_record;

    private int point;

    @OneToMany(fetch = FetchType.LAZY)
    private List<ChildItem> childItem = new ArrayList<>();

    @OneToMany(mappedBy = "child", fetch = FetchType.LAZY)
    private List<PointRecord> pointRecords = new ArrayList<>();
}
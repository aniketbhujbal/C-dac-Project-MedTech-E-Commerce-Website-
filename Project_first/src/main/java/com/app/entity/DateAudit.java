package com.app.entity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(
    value = {"created_at", "updated_at"},
    allowGetters = true
)
@Getter
@Setter
public abstract class DateAudit implements Serializable {

	private static final long serialVersionUID = 1L;

@CreationTimestamp
  @Column(name = "CREATED_AT")
  private LocalDateTime createdAt;

  @UpdateTimestamp
  @Column(name = "UPDATED_AT")
  private LocalDateTime updatedAt;
  
}

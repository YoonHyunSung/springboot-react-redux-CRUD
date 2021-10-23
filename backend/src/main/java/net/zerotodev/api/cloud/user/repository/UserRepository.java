package net.zerotodev.api.cloud.user.repository;

import net.zerotodev.api.cloud.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}

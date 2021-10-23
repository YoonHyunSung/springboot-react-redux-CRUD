package net.zerotodev.api.cloud.user.service;

import net.zerotodev.api.cloud.user.domain.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findById(long userId);
}

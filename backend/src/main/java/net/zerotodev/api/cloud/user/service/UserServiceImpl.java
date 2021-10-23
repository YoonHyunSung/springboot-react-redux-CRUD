package net.zerotodev.api.cloud.user.service;

import lombok.RequiredArgsConstructor;
import net.zerotodev.api.cloud.user.domain.User;
import net.zerotodev.api.cloud.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;


    @Override
    public Optional<User> findById(long userid) {
        return userRepository.findById(userid);
    }
}

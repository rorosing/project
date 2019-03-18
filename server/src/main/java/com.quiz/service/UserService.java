package com.quiz.service;

import com.quiz.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}

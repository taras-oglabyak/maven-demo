package com.to;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class AppTest {

    @Test
    void shouldPass() {
        var res = 1 + 2 < 5;
        assertThat(res).isTrue();
    }

}

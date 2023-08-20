const test_info = {
    testID: 1, // test unique ID
    styleID: 1, // design(css ID)
    title: "섹스 취향 테스트", // 개발자 식별용(?)
    subtitle: "나는 어떤 취향을 갖고 있을까?",
    description: "설명하기 어려웠던 나의 취향!\n 당신의 취향을 알려드립니다",
    language: ["kor", "eng", "chn", "jpn"], // language support
    total_question_nums: 8
}

const algorithm ={ // 모든 경우 커버해야함
    // TODO
    /*1번 ans == 8 → skin type,
    1번 ans == 7 → sexy type,*/
}

const result_images = {
    "skin": "condom_result_image1.jpg",
    "sexy": "condom_result_image2.jpg"
}

export { test_info, algorithm, result_images };
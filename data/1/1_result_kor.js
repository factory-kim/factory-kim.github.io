export const result_info = {
    type_pretext: "당신의 타입의",
    product_pretext: "당신에게 추천하는 제품은",
    type_name_mapping: [
        {
            type: "sexy",
            name: "섹시섹시"
        },
        {
            type: "shy",
            name: "샤이샤이"
        },
        {
            type: "angry",
            name: "앵그리"
        },
    ],

    result_images_mapping: [
        {
            type: "sexy",
            img: "1_result_kor_sexy.jpg"
        },
        {
            type: "shy",
            img: "1_result_kor_shy.jpg"
        },
        {
            type: "angry",
            img: "1_result_kor_angry.jpg"
        }
    ],

    product_mapping: [
        {
            type: "sexy",
            product_idx: [1,2]
        },
        {
            type: "shy",
            product_idx: [2,3]
        },
        {
            type: "angry",
            product_idx: [1,3]
        }
    ],

    product_info: [
        {
            img: "1_product_1.jpg", 
            name: "This is perfume 1",
            description: "love perfume 1 description"
        },
        {
            img: "1_product_2.jpg", 
            name: "This is perfume 2",
            description: "love perfume 2 description"
        },
        {
            img: "1_product_3.jpg", 
            name: "This is perfume 3",
            description: "love perfume 3 description"
        },
    ],

    best_worst: [
        {
            type: "sexy",
            best: "shy",
            worst: "angry"
        },
        {
            type: "shy",
            best: "sexy",
            worst: "angry"
        },
        {
            type: "angry",
            best: "sexy",
            worst: "shy"
        }
    ]
}
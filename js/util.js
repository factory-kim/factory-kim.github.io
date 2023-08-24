import { test_info, algorithm, result_images } from '../data/love/love_info.js';

export function getStartImagePath(test_name) {
    const path = `../res/${test_name}_start_image.jpg`
    return path
}

export function getTestData(test_name) {
    //return eval(`${test_name}_test_info`)
    return test_info
}
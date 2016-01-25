/*
 @flow
 */
export type Post =  {
    by: String,
    descendants: Number,
    id: Number,
    kids: Array<Number>,
    score: Number,
    time: Number,
    title: String,
    type: String,
    url: String
};

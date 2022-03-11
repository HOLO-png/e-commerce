import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Paginations from './Pagination/index';
import { Comment, Avatar, Form, Button, Input, Rate } from 'antd';

import CommentItem from './CommentItem';
import { toast } from 'react-toastify';
import { renderPhotoAccout } from '../../../utils/avartarChange';
import { imagesUpload, imageUpload } from '../../../utils/imageUpload';
import EditorComment from './EditorComment';

function Comments(props) {
    const { commentsUser, product, handleInSertCmt, handleComments, user } =
        props;
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const [star, setStar] = useState(0);
    const [img, setimg] = useState([]);
    const [video, setvideo] = useState([]);

    useEffect(() => {
        setComments(commentsUser);
    }, [commentsUser]);

    const handleSubmit = async (e) => {
        if (value) {
            e.preventDefault();
            setSubmitting(true);
            const imgURL = [];
            const videoURL = [];
            let imageMedia = [];
            let videoMedia = [];
            if (img.length) {
                img.forEach((el) => {
                    if (el.thumbUrl) {
                        imgURL.push(el.thumbUrl);
                    }
                });
                imageMedia = await imagesUpload(imgURL);
            }
            if (video.length) {
                video.forEach(async (el) => {
                    if (el.originFileObj) {
                        videoURL.push(el.originFileObj);
                    }
                });
                videoMedia = await imagesUpload(videoURL);
            }

            setTimeout(async () => {
                setSubmitting(false);
                setValue('');
                setStar(0);
                handleInSertCmt({
                    userId: user._id,
                    star: star,
                    content: value,
                    tag: {},
                    media: {
                        image: imageMedia,
                        video: videoMedia,
                    },
                });

                setimg([]);
                setvideo([]);
            }, 1000);
        } else {
            toast.warning('Bạn chưa nhập nội dung vào trường này');
        }
    };

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const handleChangeStar = (value) => {
        setStar(value);
    };

    const importImg = useCallback((media) => {
        media.forEach(async (element) => {
            if (element.type === 'video/mp4') {
                setvideo([element]);
            } else if (element.type === 'image/jpeg') {
                setimg(media);
            }
        });
    });

    return (
        <>
            <Comment
                avatar={renderPhotoAccout(
                    user.profilePicture,
                    30,
                    user.displayName,
                )}
                content={
                    <EditorComment
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                        star={star}
                        handleChangeStar={handleChangeStar}
                        importImg={importImg}
                        img={img}
                        video={video}
                        user={user}
                    />
                }
            />
            {/* <CommentItem
                comments={comments}
                handleComments={handleComments}
                user={user}
            /> */}
            <Paginations />
            <br />
        </>
    );
}

Comments.propTypes = {};

export default Comments;

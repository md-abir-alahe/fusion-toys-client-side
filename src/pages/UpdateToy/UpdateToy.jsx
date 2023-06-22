import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../features/Title/useTitle';

const UpdateToy = () => {
    useTitle('Update Toy');
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();
    const { _id, toy_name, picture_url, seller_name, seller_email, sub_category, price, rating, quantity, detail_description } = toy;
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const toy_name = form.toy_name.value;
        const picture_url = form.picture_url.value;
        const seller_name = user?.displayName;
        const seller_email = user.email;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const detail_description = form.detail_description.value;

        const newToy = { toy_name, picture_url, seller_name, seller_email, sub_category, price, rating, quantity, detail_description }

        fetch(`https://fusion-toys-server.vercel.app/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen w-full bg-base-200">
                <div className="card flex-shrink-0 shadow-2xl bg-base-100 my-8">
                    <div className="card-body w-full">
                        <h1 className="text-5xl text-primary mb-4 font-boogaloo font-bold text-center">UPDATE A TOY</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col md:flex-row gap-6'>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input name='toy_name' defaultValue={toy_name} type="text" placeholder="name" className="input input-bordered" disabled />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input name='seller_name' type="text" defaultValue={user?.displayName} placeholder="seller name" className="input input-bordered" disabled />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input name='seller_email' type="text" defaultValue={user.email} placeholder="seller email" className="input input-bordered" disabled />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input name='picture_url' defaultValue={picture_url} type="text" placeholder="photo url" className="input input-bordered" disabled/>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Sub Category</span>
                                        </label>
                                        <input name='sub_category' defaultValue={sub_category} type="text" placeholder="Sub Category" className="input input-bordered" disabled/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input name='price' defaultValue={price} type="number" placeholder="price" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input name='rating' defaultValue={rating} type="number" placeholder="rating" disabled className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input name='quantity' type="number" placeholder="quantity" defaultValue={quantity} className="input input-bordered" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail description</span>
                                </label> 
                                <textarea name='detail_description' defaultValue={detail_description} placeholder="description" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn-primary mx-auto" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;
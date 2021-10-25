import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import CategoryContainer from "../component/postComponents/CategoryContainer";
import { Row, Col } from 'antd';

function ManageCategoriesPage() {

    const [availableCategories, setCategory] = useState([])
    const [docID, setDocId] = useState()

    const addToCategoryList = (categoryName) => {
        if (!availableCategories.includes(categoryName)) {
            setCategory([...availableCategories, categoryName])
        }
    }

    const removeFromCategoryList = (categoryName) => {
        if (availableCategories.includes(categoryName)) {
            const index = availableCategories.indexOf(categoryName)
            availableCategories.splice(index, 1)
            setCategory([...availableCategories])
        }
    }

    const updateDataBaseCategoryList = () => {
        projectFirestore.collection("categories").doc(docID).set({ CategoryList: availableCategories })
    }

    useEffect(() => {
        if (docID) {
            updateDataBaseCategoryList()
        }
    }, [availableCategories])

    useEffect(() => {
        projectFirestore
            .collection("categories")
            .get()
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    setCategory([...doc.data().CategoryList])
                    setDocId(doc.id)
                });
            });
    }, []);

    return (
        // <div style={{display: "flex", margin: "7%", flexDirection: "column", alignItems: "center"}}>

        //     <h1>Category List</h1>

        //     <div className="manage--categories--form--container" style={{marginTop: "2%", marginBottom: "3%"}}>
        //         <form id="add-category-form">
        //             <input type="text" name="name" placeholder="Category name" />
        //             <button type="button" onClick={() => {
        //                 const form = document.querySelector('#add-category-form');
        //                 addToCategoryList(form.name.value)
        //                 form.name.value = '';
        //             }}>Add Category</button>
        //         </form>
        //     </div>
        // </div>
       <Row style={{minHeight: "100%"}} justify="space-around" align="middle">
            <Col span={24} align='middle'>
                <Row justify="center">
                    <h2>Category List</h2>
                </Row>
                <Row justify="center" style={{marginTop: '24px'}}> 
                    <Col>
                        <CategoryContainer icon="x" categoryList={availableCategories} callBackFunc={removeFromCategoryList} tagStyle={{minHeight: '36px', minWidth: '64px', textAlign: 'center'}}/>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop: '24px'}}>
                    <form id="add-category-form">
                        <input type="text" name="name" placeholder="Category name" />
                        <button type="button" onClick={() => {
                            const form = document.querySelector('#add-category-form');
                            addToCategoryList(form.name.value)
                            form.name.value = '';
                        }}>Add Category</button>
                    </form>
                </Row>
            </Col>
        </Row> 
    );
}

export default ManageCategoriesPage;

{/* <Row style={{minHeight: "100%"}} justify="space-around" align="middle">
<Col span={24} align='middle'>
    <Row justify="center" style={{marginTop: '24px'}}> 
        <Col>
            <CategoryContainer icon="x" categoryList={availableCategories} callBackFunc={removeFromCategoryList} tagStyle={{minHeight: '36px', minWidth: '64px', textAlign: 'center'}}/>
        </Col>
    </Row>
    <Row justify="center" style={{marginTop: '24px'}}>
        <form id="add-category-form">
            <input type="text" name="name" placeholder="Category name" />
            <button type="button" onClick={() => {
                const form = document.querySelector('#add-category-form');
                addToCategoryList(form.name.value)
                form.name.value = '';
            }}>Add Category</button>
        </form>
    </Row>
</Col>
</Row> */}
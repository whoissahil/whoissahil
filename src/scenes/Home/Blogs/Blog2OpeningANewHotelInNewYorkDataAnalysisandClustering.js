import React from "react";
import { Container } from "react-grid-system";
// import Clap from 'react-clap-button';

// Components
import GoBack from "../../../components/common/GoBack";
import Markdown from "../../../components/common/MarkdownStyling";
import Helmet from "../../../components/common/Helmet";



const blog2 = `
### Introduction

Opening a new business can be challenging. Choosing a location for the business can be even more challenging. Hotels are one of the most important thing in any neighborhood. When people visit any place, having a hotel at a convenient location is the best thing they can wish for. In this project, I will be creating a Machine Learning Algorithm which uses Foresquare’s data and analyze where can a developer open a new hotel so that there is very little to no competition from existing hotels.

### Business Problem

The objective of this project is to analyze and select the best locations in New York City where one can open a new Hotel. Using Data Science and Machine learning technology like Clustering, can we answer this simple question: Where to open a new Hotel in New York?

### Data

To solve this challenge, I will be using the following data:

- List of neighborhoods in New York — This defines the scope of this project which is confined to New York City.
- Latitude and Longitude of the neighborhoods in New York City — This is required to visualize the places and the the venues.
- Venue data, Particularly related to the hotels in the neighborhoods.

#### Source of Data

I will be using data from https://geo.nyu.edu/catalog/nyu_2451_34572 where we can find the List of neighborhoods in NY and other features as well. We will be only needing the neighborhoods and the boroughs data from it. The data is in the format of JSON so we will need to modify it ad well. Then we will get the Longitude and the Lattitude of the neighborhoods and use them.

From Foursquare, we can get the common areas nearby and check how many hotels are there in the neighborhood. Foursqaure has one of the largest database of places in the whole world and we can get a lot of information from it. Here we are only interested in the subcategory “Hotel”

### Methodology

Firstly, we need the complete data of NY which includes the neighborhoods and the boroughs. After analyzing the dataset, few observations were made, such as, the data was in JSON format, it had other information also which was not required for the project. So we began the Data Preprocessing.

![NY Neighborhoods and Boroughs](/assets/images/blog/2-2.png "NY Neighborhoods and Boroughs")

The very first step was to remove the unnecessary data. The only data which was required was in the featured key which was basically the list of the neighborhoods. So, we define a new variable that includes this data. After that, we had to transform the data into a pandas dataframe. So we create a new dataframe and define the columns. Then we iterate through our JSON data and put it in the pandas dataframe. We noticed that we had 5 Boroughs and 306 neighborhoods in the dataframe. Then we get the latitude and longitude values of New York City using geopy library.Then we create a map of New York with neighborhoods superimposed on top.

![Map of New York with Neighborhoods Superimposed](/assets/images/blog/2-3.png "Map of New York with Neighborhoods Superimposed")

Let’s simplify the above map and segment and cluster only the neighborhoods in Manhattan. So let’s slice the original dataframe and create a new dataframe of the Manhattan data. Then we again create a map of Manhattan with neighborhoods superimposed on top.

![Segmentation and Clustering of the Neighborhoods in Manhattan](/assets/images/blog/2-4.png "Segmentation and Clustering of the Neighborhoods in Manhattan")

Then we define Foursquare Credentials and Version and use its api to get the top 100 venues that are in Marble Hill within a radius of 750 meters. Then we merge the data with the neighborhood data in a new dataframe.

![Merged data of Neighborhood in NY with Hotels in NY](/assets/images/blog/2-5.png "Merged data of Neighborhood in NY with Hotels in NY")

Since we are concerned about the Hotel subcategory, we build a new dataframe from the above dataframe by grouping. Now we have a dataframe with the neighborhood and the hotels. Next we have to cluster the neighborhoods. We set the number of clusters to 5 and cluster all the neighborhoods and visualize it on a map.

### Results

The results from the k-means clustering algorithm shows that we can categorize the neighborhoods:

- Cluster 1: Low number or no number of Hotels
- Cluster 2 and Cluster 3: Medium number of Hotels
- Cluster 0 and Cluster 4: High number of Hotels

![Neighborhoods categorized on basis of hotels in New York](/assets/images/blog/2-6.png "Neighborhoods categorized on basis of hotels in New York")

### Conclusion

After going through a business problem, specifying the data required and preparing it, and performing a clustering algorithm on the data, the best place to open a new hotel in Manhattan, NY is in Cluster 1 as there are less or no number of hotels in the area so there will be less competition.



`


function Blog2_OpeningANewHotelInNewYorkDataAnalysisandClustering() {
    return (
        <div>
        <Helmet title="writes on Opening a new hotel in New York — Data Analysis and Clustering" />
        <section className="section section-single-post section-single-post-1">
            <div className="display-spacing">
                <Container>
                    <div className="max-w-768 div-center">
                        <div className="post">
                            <div className="post-head">
                                <div class="post-info">
                                    <GoBack />
                                    <h1>Opening a new hotel in New York — Data Analysis and Clustering</h1>
                                    <p>
                                        by <span className="author">Sahil Sharma</span> on <span class="date">Apr 8, 2020</span>.
                                    </p>
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-image">
                                    <img src="/assets/images/blog/2-1.jpg" alt="Sahil Post" />
                                    <figcaption>Photo by <a href="https://unsplash.com/@rhemakallianpur" rel="noopener noreferrer" target="_blank">Rhema Kallianpur</a> on <a href="https://unsplash.com/@yancymin" rel="noopener noreferrer" target="_blank">Unspalsh</a></figcaption>
                                </div>
                                <div className="post-content">
                                    <Markdown
                                        children={blog2}
                                    />
                                </div>
                                <div class="post-tags">
                                    <span>Tags:</span>
                                    <ul>
                                        <li class="greenTag">
                                            Data Analysis
                                        </li>
                                        <li class="purpleTag">
                                            Data Science
                                        </li>
                                    </ul>
                                    {/* <span>
                                        <Clap
                                        count={0}
                                        countTotal={0}
                                        iconComponent={props => <FaCheck {...props} size={15} /> }
                                        isClicked={false}
                                        maxCount={50}
                                        onCountChange={function onCountChange(){}}
                                        theme={{
                                            secondaryColor: '#5f27ae'
                                        }}
                                        />
                                    </span>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </div>
    );
}

export default Blog2_OpeningANewHotelInNewYorkDataAnalysisandClustering;

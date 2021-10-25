import React from "react"
import {
  MainDiv,
  Post,
  Heart,
  Views,
  CommenTitle,
  CommentBox,
} from "./BlogDetailsStyles"
import {
  FaFacebook,
  FaTwitter,
  FaShare,
  FaEye,
  FaHeart,
  FaTelegramPlane,
} from "react-icons/fa"
import { Button } from "../../styles/GlobalComponents/Button"

export default function BlogsDetails() {
  return (
    <MainDiv>
      <h1>
        Lorem ipsum dolor sit amet, consecte adipiscing elit. Maecenas convallis
        tellus et libero tincidunt
      </h1>
      <br />
      <p> username | Oct 18, 2021, 6:45pm CEST</p>
      <br />

      <h3>
        <FaFacebook />
      </h3>
      <h3>
        <FaTwitter />
      </h3>
      <h4>
        <FaShare />
      </h4>

      <Post>
        <img src='/img/footballPost.png' alt='BlogImage not loaded' />
        <p>
          Quisque maximus tempus eleifend. Curabitur quis odio rutrum, sodales
          risus nec, mollis turpis. Sed quis tellus porta justo lacinia
          ultrices. Sed bibendum a libero at posuere. Donec volutpat pretium
          tellus in porttitor. <br />
          <br />
          Maecenas lacus diam, scelerisque ullamcorper turpis ac, hendrerit
          commodo arcu. Praesent tempor id velit eu sagittis. Curabitur aliquet
          tincidunt tempus. Donec vestibulum maximus enim, et hendrerit velit
          hendrerit in. Nunc sit amet maximus eros. Curabitur feugiat quis dui
          vitae mattis. Nunc id interdum lorem, a tristique mauris. <br />
          <br />
          Ut efficitur nulla non molestie ultricies. Duis dignissim lectus eu
          libero fringilla, eleifend ullamcorper mauris aliquam. Integer
          vestibulum justo non odio fermentum, eu eleifend lacus venenatis.
          Morbi luctus venenatis libero, nec imperdiet ligula aliquam vitae.
          Pellentesque dui mauris, convallis ac diam sit amet, semper volutpat
          mauris. <br />
          <br />
          Vestibulum congue, tellus sit amet tincidunt cursus, lorem sapien
          sollicitudin felis, quis luctus nulla nisl at nunc. Duis eu ultricies
          velit. Phasellus vestibulum quam a felis dictum, ac faucibus mauris
          maximus. Sed ac sem euismod, ullamcorper libero sit amet, molestie
          ligula. <br />
          <br />
          Cras efficitur dictum ante, vitae viverra augue pretium at. Etiam
          varius tortor a hendrerit tincidunt. Praesent non pretium risus, nec
          ornare lectus. Nullam a eleifend tellus. Suspendisse ut ex non diam
          sodales semper.
          <br />
          <br />
          Sed pretium ipsum eros, pulvinar rutrum elit finibus nec. Pellentesque
          nulla arcu, cursus sit amet turpis sed, ullamcorper posuere turpis.
          Nunc aliquam efficitur diam, eget faucibus tortor finibus vestibulum.
          Maecenas libero tortor, hendrerit et malesuada in, porttitor id nisi.
          Nulla rhoncus ligula sed dolor vulputate, a vestibulum felis blandit.
          Vestibulum pulvinar elit ac massa interdum, at mattis justo tincidunt.
          In tristique, velit eu posuere porta, leo nunc lobortis sem, ut semper
          elit nulla nec tortor. Proin vitae molestie nunc. Aenean aliquet nisi
          eu lectus interdum, quis dictum enim fringilla. Aliquam interdum
          imperdiet ex, nec mattis sapien rutrum vel. Fusce pellentesque
          convallis rhoncus. Ut venenatis diam id lacus pulvinar, sed tincidunt
          dolor gravida. <br />
          <br />
          Nullam suscipit magna sit amet elit condimentum pulvinar. Etiam id
          pharetra ipsum, in pulvinar mi. Nulla facilisi. Phasellus tempus, odio
          at dapibus facilisis, purus lacus tincidunt libero, a ultricies nunc
          massa elementum turpis. Praesent tincidunt posuere magna ac commodo.
          Sed ultricies libero est, quis fringilla orci tristique quis.
          Phasellus et risus ut urna pretium ullamcorper. Morbi ut blandit
          mauris. Duis pretium, ligula eu consectetur ornare, ante dolor
          dignissim tortor, nec placerat neque odio in arcu. Ut tempus fringilla
          leo vel elementum. Mauris scelerisque ornare cursus. Aliquam porttitor
          porttitor sem ac ultrices. Vivamus condimentum elementum arcu, vel
          finibus mi rhoncus in. Duis cursus neque at malesuada volutpat. Nulla
          scelerisque mauris tortor, vitae aliquet nunc egestas eget.
        </p>
        <Heart>
          <FaHeart /> <p> 126 </p>
        </Heart>
        <Views>
          <FaEye /> <p> 4.5k</p>
        </Views>
      </Post>
      <CommenTitle>Comments</CommenTitle>
      <br />
      <textarea rows='7'></textarea>
      <h6>
        <Button
          bg={({ theme }) => theme.colors.yellow}
          clr={({ theme }) => theme.colors.primaryBlue}
        >
          Comment <FaTelegramPlane />
        </Button>
      </h6>
      <CommentBox>
        <div></div>
        <h1>Username</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis tellus et libero tincidunt interdum. Quisque maximus tempus
          eleifend. Curabitur quis odio rutrum, sodales risus nec, mollis
          turpis. Sed quis tellus porta justo lacinia ultrices. Sed bibendum a
          libero at posuere.
        </p>
      </CommentBox>
      <CommentBox>
        <div></div>
        <h1>Username</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis tellus et libero tincidunt interdum. Quisque maximus tempus
          eleifend. Curabitur quis odio rutrum, sodales risus nec, mollis
          turpis. Sed quis tellus porta justo lacinia ultrices. Sed bibendum a
          libero at posuere.
        </p>
      </CommentBox>
      <CommentBox>
        <div></div>
        <h1>Username</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis tellus et libero tincidunt interdum. Quisque maximus tempus
          eleifend. Curabitur quis odio rutrum, sodales risus nec, mollis
          turpis. Sed quis tellus porta justo lacinia ultrices. Sed bibendum a
          libero at posuere.
        </p>
      </CommentBox>
    </MainDiv>
  )
}

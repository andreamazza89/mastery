module ModuleCatalog exposing (..)

import Card exposing (Display(..), view)
import Html exposing (..)
import Html.Attributes exposing (class, style)
import Lesson exposing (..)
import Messages exposing (..)
import Style exposing (..)


view : List Lesson -> Html Msg
view lessons =
    div [ class "container is-fluid", style flexible ]
        (List.map (\lesson -> Card.view Animated (ShowDetails WithAdd lesson.id) lesson) lessons)


flexible : List Style
flexible =
    [ display "flex"
    , flexWrap wrap
    , alignContent flexStart
    , justifyContent center
    ]
